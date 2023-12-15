import {
    IonContent,
    IonHeader, IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {useEffect, useState} from "react";

const Tab1: React.FC = () => {

    const [dataset, setDataset] = useState<any[]>([]);
    // URL for WP JSON REST endpoint
    const dataURL = "https://dev-cs5513-week-11.pantheonsite.io/wp-json/twentytwentyfour-child/v1/products";
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
          <IonTitle>PRODUCTS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonList id="thing-list" class="">
              <IonListHeader class="">ON SALE NOW!</IonListHeader>
              {dataset.map((item, index) => (
                  <IonItem lines="inset" key={index}>
                      <IonLabel>
                          <IonImg
                              src={item.image_url}
                              alt={item.product_name}
                              class="ion-float-start ion-margin"
                          ></IonImg>

                          <div class="ion-margin"><h2>{item.product_name}</h2></div>
                          <div className="ion-margin"><p>{item.price}</p></div>
                          <div className="ion-margin"><p>{item.description}</p></div>
                      </IonLabel>
                  </IonItem>
              ))}
          </IonList>      </IonContent>
    </IonPage>
  );
};

export default Tab1;
