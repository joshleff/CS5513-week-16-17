import {
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import {useEffect, useState} from "react";

const Tab3: React.FC = () => {
    const [dataset, setDataset] = useState<any[]>([]);
    // URL for WP JSON REST endpoint
    const dataURL = "https://dev-cs5513-week-11.pantheonsite.io/wp-json/twentytwentyfour-child/v1/customers";
    // useEffect() to get JSON data and populate dataset state variable
    useEffect(() => {
        fetch(dataURL) // fetch() to load raw json string
            .then(response => response.json()) // json() to convert raw string to json object
            .then(data => setDataset(data)) // react state set function to populate data state var
    },[])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CUSTOMERS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonList id="thing-list">
              <IonListHeader>WHAT GREAT CUSTOMERS</IonListHeader>
              {dataset.map((item, index) => (
                  <IonItem lines="inset" key={index}>
                      <IonLabel>
                          <div className="ion-margin"><h4>{item.name}</h4></div>
                          <div className="ion-margin"><p>{item.phone_number}</p></div>
                          <div className="ion-margin">   <p>{item.email}</p></div>
                      </IonLabel>
                  </IonItem>
              ))}
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
