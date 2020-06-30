import React, { Component } from 'react';
import './card.scss';
import Swiper from 'react-id-swiper';
import img1 from '../../images/aa9d47b527580c71e56e8d0526f20ff2f800e886.jpg';
import img2 from '../../images/4a22b730e38c3bb2141921a3def291fd3672fda7.jpg';
import img3 from '../../images/9242787c3300e47cd543725a396eb47e304d5846.jpg';
import img4 from '../../images/8357a2e1eed64c9bb47844e2aeec7e1e956d9759.png';

class Card extends Component {
  constructor(props: any) {
    super(props);
    this.state = {

    }
  }

  render() {
    const imgArr: string[] = [
      img1, img2, img3, img4
    ];
    const params: object = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      spaceBetween: 30,
      loop: true,
    }
    return (
      <div className="card">
        <Swiper {...params}>
          {
            imgArr.map((item,index) => (
              <div key={index}>
                <img src={item} alt=""></img>
              </div>
            ))
          }
        </Swiper>
      </div>
    )
  }
}

export default Card;