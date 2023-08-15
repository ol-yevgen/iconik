import { Button } from '@/components/index'

export default function ServiceInfo({ data }) {

    return (
        <div className="service__info-wrapper">
            {data.serviceInfo.map(info => {
                return (
                    <ul key={info.id}
                        className="service__info"
                    >
                        <li className="service__info-title main__text-2">{info.label.toUpperCase()}</li>
                        <li className="service__info-item">
                            <span className="service__info-1">{info.info1}</span>
                            <span>{info.info2}</span>
                        </li>
                    </ul>
                )
            })}
            <Button
                text='Join the event'
                link='/contacts'
                className=''
                style={{}}
            />
        </div>
    )
}