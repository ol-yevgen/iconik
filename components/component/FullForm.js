'use client'
import Image from 'next/image';
import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Selector } from '@/components/index';
import { Context } from "@/helpers/context";

import '../../app/styles/components/consultationForm.scss';
import userIcon from '@/public/images/home/consultation/user.svg';
import phoneIcon from '@/public/images/home/consultation/phone.svg';
import mailIcon from '@/public/images/home/consultation/mail.svg';
import formLogo from '@/public/images/home/consultation/form-logo.svg';

const fullSchema = yup.object().shape({
    name: yup
        .string()
        .required()
        .min(2, 'Minimum 2 characters')
        .max(60, 'Maximum 60 characters'),
    phone: yup
        .string()
        .required()
        .matches(/^[+]{0,1}([0-9]{11,13})$/),
    email: yup
        .string()
        .min(2, 'Minimum 2 characters')
        .max(60, 'Maximum 60 characters')
        .required()
        .matches(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/, 'The email must be a valid email address.'),
})

export const FullForm = ({ phoneCodesData }) => {

    const [firstPhoneCode, setFirstPhoneCode] = useState(phoneCodesData[0].label)
    const [form, setForm] = useState([])

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
                email: "",
                message: ""
            },
            mode: "onChange",
            resolver: yupResolver(fullSchema)
        }
    )

    const setStartPhone = (code) => {
        setFirstPhoneCode(code)
        setValue('phone', code)
    }

    const formSubmit = () => {
        setForm(getValues())
        reset();
    }
    
    useEffect(() => {
        console.log(form);
    }, [form])

    return (
        <div className='form form__contacts'>
            <Image src={formLogo} width={70} height={30} alt='logo' />

            <form
                className='form__first'
                onSubmit={handleSubmit(formSubmit)}
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
                <div className='form__item'>
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
                <div className='form__item'>
                    <span className="main__text-2">
                        Message
                        <span className='form__required-star'></span>
                    </span>

                    <div className={errors?.message ? `form__input ${'error__border'}` : 'form__input'}>
                        <textarea
                            rows={3}
                            cols={33}
                            id="message"
                            autoComplete="off"
                            {...register('message')}
                        />
                        <label htmlFor="message" className={errors?.message ? (dirtyFields.message ? 'form__input-small error__text' : 'form__input-big error__text') : (dirtyFields.message ? 'form__input-small' : 'form__input-big ')}>Describe your question...</label>
                        {errors?.message && <span className="form__input-error ">{errors?.message?.message || "Error!"}</span>}
                    </div>
                </div>
                <div className='submit__first submit__first-contacts'>
                    <button
                        type='submit'
                        className='btn btn__submit btn__submit-contacts'
                        onClick={formSubmit}
                        disabled={!isValid}
                    >
                        Get in touch
                    </button>
                    <p className='text'>By clicking the button you are accepting to receive a phone call to arrange a show-around</p>
                </div>
            </form>
        </div>
    )
}