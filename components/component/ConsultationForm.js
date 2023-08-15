'use client'
import Image from 'next/image';
import { useEffect, useState } from "react";
import { FirstStep, SecondStep } from '@/components/index';

import formLogo from '@/public/images/home/consultation/form-logo.svg';
import '../../app/styles/components/consultationForm.scss';

export const ConsultationForm = ({ phoneCodesData }) => {

    const [firstPhoneCode, setFirstPhoneCode] = useState(phoneCodesData[0].label)
    const [formStep, setFormStep] = useState(1)
    const [firstStep, setFirstStep] = useState({ name: 'John', phone: '+380661978207' })
    const [secondStep, setSecondStep] = useState({ email: 'example@example.com' })
    const [form, setForm] = useState([])

    useEffect(() => {
        console.log(form);
    }, [secondStep, form])

    const changeFormStep = () => () => {
        if (formStep === 1) {
            setFormStep(2)
        } else {
            setFormStep(1)
        }
    }

    return (
        <div className='form'>
            <Image src={formLogo} width={70} height={30} alt='logo' />
            {formStep === 1
                ? <FirstStep
                    firstPhoneCode={firstPhoneCode}
                    setFirstPhoneCode={setFirstPhoneCode}
                    phoneCodesData={phoneCodesData}
                    setFormStep={setFormStep}
                    setFirstStep={setFirstStep}
                />
                : <SecondStep
                    setSecondStep={setSecondStep}
                    setFormStep={setFormStep}
                    setForm={setForm}
                    firstStep={firstStep}
                    secondStep={secondStep}
                />
            }

            <div className='form__steps'>
                <div className="form__steps-dots">
                    <span
                        className={`form__steps-dot ${formStep === 1 ? 'dot-active' : ''}`}
                        onClick={changeFormStep()}
                    ></span>
                    <span
                        className={`form__steps-dot ${formStep === 2 ? 'dot-active' : ''}`}
                        onClick={changeFormStep()}
                    ></span>
                </div>
                <div className="form__steps-steps text">
                    <span>Step {formStep}</span>
                    <span className="form__steps-step"> of 2</span>
                </div>
            </div>
        </div>
    )
}