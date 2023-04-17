const InformationPage = () => {
    const infoList = [
        { id: 1, title: 'Welcome!', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' , researchLink:''},
        { id: 2, title: 'About us', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 3, title: 'Contact', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
      ];
    return ( 
        <div className="information-container">
            <h1>Information page</h1>
            {infoList.map((info) => (
                <div className="info-preview" key={info.id}>
                    <h2>{info.title}</h2>
                    <p>{info.text}</p>
                </div>
            ))}
        </div>
     );
}
 
export default InformationPage;