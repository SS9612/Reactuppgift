import React from 'react';
import phoneImage from '../../assets/AppfeaturesPhone.svg';
import easyPaymentsIcon from '../../assets/Easy Payments Icon.svg';
import dataSecurityIcon from '../../assets/Data security icon.svg';
import costStatisticsIcon from '../../assets/Cost statistics.svg';
import supportIcon from '../../assets/Support Icon.svg';
import cashbackIcon from '../../assets/Cashback Icon.svg';
import topStandardsIcon from '../../assets/Top standards icon.svg';
import './styles.css';

const AppFeatures = () => {
  const features = [
    { id: 1, icon: easyPaymentsIcon, title: 'Easy Payments', subtitle: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.' },
    { id: 2, icon: dataSecurityIcon, title: 'Data Security', subtitle: 'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.' },
    { id: 3, icon: costStatisticsIcon, title: 'Cost Statistics', subtitle: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.' },
    { id: 4, icon: supportIcon, title: 'Support 24/7', subtitle: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.' },
    { id: 5, icon: cashbackIcon, title: 'Regular Cashback', subtitle: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.' },
    { id: 6, icon: topStandardsIcon, title: 'Top Standards', subtitle: 'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.' },
  ];

  return (
    <section id="app-features">
      <div className="container">
        <div className="images">
          <img src={phoneImage} alt="App Features Phone" />
        </div>
        <div className="content">
          <div className="headline">
            <h1>App Features</h1>
          </div>
          <div className="subheader">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          </div>
          <div className="Icons">
            {features.map((feature) => (
              <div key={feature.id} className="qa-box">
                <img src={feature.icon} alt={`${feature.title} Icon`} />
                <div className="text-wrapper">
                  <p className="title">{feature.title}</p>
                  <p className="subtitle">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
