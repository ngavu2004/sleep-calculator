import './stylesheets/InformationPage.css';
import {GiNightSleep} from "react-icons/gi";

const InformationPage = () => {
    const infoList = [
        { id: 1, title: 'You don\'t need 8 hours of sleep ', text: 'A lot of research has pointed out that number of sleep hours will vary per person. Normally it will fall into the range of 6 - 8 hours. But if you are good with 5, then 5 hours is enough for you.' , researchLink:'https://www.youtube.com/watch?v=knJWF4km3y0', researchTitle:'How much sleep do you really need? | Sleeping with Science, a TED series'},
        { id: 2, title: 'Don\'t consume Caffeine in the evening', text: 'I know we are all coffee addict. But try to avoid consuming in the evening as it may lead to disruption of sleep', researchLink:'https://doi.org/10.1016/j.smrv.2007.07.004', researchTitle:'Caffeine: Sleep and daytime sleepiness' },
        { id: 3, title: 'Try to wake up at the end of sleep cycle', text: 'Do you know that our sleeps are divided into 90-minute cycles? And if you wake up in the middle of the cycle, it is easily to be tired. Therefore, try to plan your awake time at the end of a 90-minute cycle.', researchLink:'https://www.youtube.com/watch?v=eM2VWspRpfk', researchTitle:'A walk through the stages of sleep | Sleeping with Science, a TED series'}
      ];
    return ( 
        <div className="information-container">
            <div className="header">
                <h1>Welcome <span><GiNightSleep/></span></h1> 
                <h2>Sleep information page</h2>
                <h5>Find all you need to understand your sleep</h5>
            </div>
            {infoList.map((info) => (
                <div className="info-preview" key={info.id}>
                    <h2>{info.title}</h2>
                    <p>{info.text}</p>
                    <a href={info.researchLink} target = "_blank">Source: {info.researchTitle}</a>
                </div>
            ))}
        </div>
     );
}
 
export default InformationPage;