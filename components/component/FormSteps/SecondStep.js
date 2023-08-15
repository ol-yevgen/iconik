'use client';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Image from 'next/image';

import mailIcon from '@/public/images/home/consultation/mail.svg';

const secondStepSchema = yup.object().shape({
    email: yup
        .string()
        .min(2, 'Minimum 2 characters')
        .max(60, 'Maximum 60 characters')
        .required()
        .matches(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/, 'The email must be a valid email address.'),
})

export const SecondStep = (props) => {

    const { setFormStep, setSecondStep, setForm, firstStep } = props;

    const {
        register,
        control,
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
                email: "",
            },
            mode: "onChange",
            resolver: yupResolver(secondStepSchema)
        }
    )

    const formSecondStepSubmit = async() => {
        setForm([Object.assign(firstStep, getValues())])
        setSecondStep(getValues())
        setFormStep(1)
        reset();
    }

    return (
        <form
            className='form__second'
            onSubmit={handleSubmit(formSecondStepSubmit)}
        >

            <div className='form__item'>
                <p>
                    If you leave your email, we offer you an additional discount on...
                </p>
                <span className="main__text-2">
                    Email address
                    <span className='form__required-star'>*</span>
                </span>

                <div className={errors?.email ? `form__input ${'error__border'}` : 'form__input'}>
                    <input
                        type="text"
                        id="email"
                        autoComplete="off"
                        {...register('email')}
                    />
                    <label htmlFor="email" className={errors?.email ? (dirtyFields.email ? 'form__input-small error__text' : 'form__input-big error__text') : (dirtyFields.email ? 'form__input-small' : 'form__input-big ')}>Email</label>
                    {errors?.email && <span className="form__input-error ">{errors?.email?.message || "Error!"}</span>}
                    <Image src={mailIcon} width={16} height={16} alt='user' />
                </div>
            </div>

            <div className='submit__first'>
                <button
                    type='submit'
                    className='btn btn__submit'
                    onClick={formSecondStepSubmit}
                    disabled={!isValid}
                >
                    Submit
                </button>
                <p className='text'>By clicking the button you are accepting to receive an email about club membership</p>
            </div>
        </form>
    )
}