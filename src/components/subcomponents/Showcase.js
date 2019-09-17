import React from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
// import '.../img/';

const imgItems = [
    {
        src: './img/calculator.jpg',
        altText: 'Calculator',
        caption: ''
    },
    {
        src: './img/stacks.jpg',
        altText: 'Coins',
        caption: ''
    },
    {
        src: './img/bookkeep.jpg',
        altText: 'Bookkeeping',
        caption: ''
    },
    {
        src: './img/laptop.jpg',
        altText: 'Laptop and Charts',
        caption: ''
    },
];

class Showcase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.gotToImg = this.gotToImg.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === imgItems.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if(this.animated) return;
        const nextIndex = this.state.activeIndex === 0 ? imgItems.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    gotToImg(newIndex) {
        if(this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = imgItems.map((img) => {
            return (
                <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={img.src}
                className="text-center"
                >
                    <img src={img.src} alt={img.altText} className="img-fluid rounded
                    "/>
                    <CarouselCaption captionHeader={img.caption} />
                </CarouselItem>
            );
        });
        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                className="carousel-fade"
            >
                <CarouselIndicators items={imgItems} activeIndex={activeIndex} onClickHandler={this.gotToImg}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
            </Carousel>
        );
    }
}

export default Showcase;