import { TextWithSliderSection, ContactSocial, } from '@/components/index';
import videoBlock from '@/public/images/contacts/video.webp';

export default async function GetSocial() {

    return (
        <TextWithSliderSection
            mainTitle={true}
            mainTitleText='get in touch'
            bg={false}
            reverse='common__container-reverse'
            title=''
            text1={<ContactSocial/>}
            text2=''
            picture={true}
            picSrc={videoBlock}
            play={true}
            line={false}
            slider=''
        />
    )
}
