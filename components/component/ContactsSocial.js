import { SocialAll } from '@/components/index';
import '@/app/styles/components/contactSocial.scss';

export default async function ContactSocial() {

    return (
        <ul className="contacts__info">
            <li className="contacts__info-item">
                <span className="contacts__info-label">SALES OFFICE</span>
                <h4>27, 4 Street, Dubai
                    United Arab Emirates</h4>
                <span>Weekdays: from 9 to 21</span>
            </li>
            <li className="contacts__info-item">
                <span className="contacts__info-label">PHONE</span>
                <h4>+971 55 230 8085</h4>
            </li>
            <li className="contacts__info-item">
                <span className="contacts__info-label">PHONE</span>
                <h4>+971 55 230 8085</h4>
            </li>
            <li className="contacts__info-item">
                <span className="contacts__info-label">EMAIL</span>
                <h4>mailexample@gmail.com</h4>
            </li>
            <li className="contacts__info-item">
                <span className="contacts__info-label">SOCIAL MEDIA</span>
                <SocialAll />
            </li>
        </ul>
    )
}
