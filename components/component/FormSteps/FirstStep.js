'use client';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Image from 'next/image';
import { Context } from "@/helpers/context";

import { Selector } from "@/components/index";

import userIcon from '@/public/images/home/consultation/user.svg';
import phoneIcon from '@/public/images/home/consultation/phone.svg';

const firstStepSchema = yup.object().shape({
    name: yup
        .string()
        .required()
        .min(2, 'Minimum 2 characters')
        .max(60, 'Maximum 60 characters'),
    phone: yup
        .string()
        .required()
        .matches(/^[+]{0,1}([0-9]{11,13})$/),
})

export const FirstStep = (props) => {

    const { firstPhoneCode, setFirstPhoneCode, phoneCodesData, setFormStep, setFirstStep } = props;

    const {
        register,
        setValue,
        getValues,
        formState: {
            errors,
            isValid,
            dirtyFields
        },
        handleSubmit,
        reset
    } = useForm(
        {
            defaultValues: {
                name: "",
                phone: firstPhoneCode,
            },
            mode: "onChange",
            resolver: yupResolver(firstStepSchema)
        }
    )

    const setStartPhone = (code) => {
        setFirstPhoneCode(code)
        setValue('phone', code)
    }

    const formFirstStepSubmit = () => {
        setFirstStep(getValues())
        setFormStep(2)
        reset();
    }

    return (
        <form
            className='form__first'
            onSubmit={handleSubmit(formFirstStepSubmit)}
        >
            <div className='form__item'>
                <span className="main__text-2">
                    First Name
                    <span className='form__required-star'>*</span>
                </span>

                <div className={errors?.name ? `form__input ${'error__border'}` : 'form__input'}>
                    <input
                        type="text"
                        id="name"
                        autoComplete="off"
                        {...register('name',)} />
                    <label htmlFor="name" className={errors?.name ? (dirtyFields.name ? 'form__input-small error__text' : 'form__input-big error__text') : (dirtyFields.name ? 'form__input-small' : 'form__input-big ')}>Name</label>

                    {errors?.name && <span className="form__input-error ">{errors?.name?.message || "Error!"}</span>}
                    <Image src={userIcon} width={16} height={16} alt='user' />
                </div>
            </div>

            <Context.Provider value={setStartPhone}>
                <div className='form__item'>
                    <label htmlFor="phone" className="main__text-2">
                        Phone
                        <span className='form__required-star'>*</span>
                    </label>
                    <div className={errors?.phone ? `form__input ${'error__border'}` : 'form__input'}>
                        <Selector
                            data={phoneCodesData}
                            style='selector__flags'
                            changeActiveFilter={() => { }}
                        />
                        <input
                            type="text"
                            id="phone"
                            autoComplete="off"
                            {...register('phone')}
                        />
                        <Image src={phoneIcon} width={16} height={16} alt='phone' />

                        {errors.phone && <span className="form__input-error ">{`The phone number must be ${firstPhoneCode} (XXX) XXX - XX - XX`}</span>}
                    </div>
                </div>
            </Context.Provider>
            <div className='submit__first'>
                <button
                    type='submit'
                    className='btn btn__submit'
                    onClick={formFirstStepSubmit}
                    disabled={!isValid}
                >
                    Get a consultation
                </button>
                <p className='text'>By clicking the button you are accepting to receive a phone call to arrange a show-around</p>
            </div>
        </form>
    )
}