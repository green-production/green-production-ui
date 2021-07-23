import React, { Component } from "react";
import photoSeating from 'assets/images/photo_seating.jpg'
import photoLight from 'assets/images/photo_lighting.jpg'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
        };
    }

    onClick(e) {
        e.preventDefault()
    }

    componentDidMount() {}

    render() {
        return (
            <div className="dashboard">
                <section className="main">
                    <aside>
                        <div className="content trending">
                            <h3><a href="javascript:void(0)" onClick={this.onClick}>What&apos;s trending</a></h3>
                            <p>Lorem ipsum dolor sit amet, consect etuer adipiscing elit. <a href="http://codifydesign.com">Morbi commodo</a>, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.</p>
                        </div>
                    </aside>

                    <aside>
                        <div className="content find-it">
                            <h3><a href="javascript:void(0)" onClick={this.onClick}>Where to find it</a></h3>
                            <p>Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Lorem ipsum dolor sit amet, consect.</p>
                        </div>
                    </aside>

                    <aside>
                        <div className="content tools">
                            <h3><a href="javascript:void(0)" onClick={this.onClick}>Tools of the trade</a></h3>
                            <p>Nullam sit amet enim. Lorem ipsum dolor sit amet, consect etuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci rhoncus neque, id pulvinar odio.</p>
                        </div>
                    </aside>
                </section>

                <section className="atmosphere">
                    <article>
                        <h2>Creating a modern atmospheer</h2>
                        <p>Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Lorem ipsum dolor sit amet etuer adipiscing elit.  Pulvinar odio lorem non turpis. Nullam sit amet enim lorem.</p>
                        <a className="btn" title="Creating a modern atmosphere" href="javascript:void(0)" onClick={this.onClick}>Learn more</a>
                    </article>
                </section>

                <section className="how-to">
                    <aside>
                        <div className="content">
                            <img alt="Choosing the proper seating" src={photoSeating}/>
                            <h4>How-To: Seating</h4>
                            <p>Consectetuer adipiscing elit. Morbi commodo ipsum sed gravida orci magna rhoncus pulvinar odio lorem.</p>
                            <a title="Learn how to choose the proper seating." href="http://codifydesign.com">Learn more</a>
                        </div>
                    </aside>
                    <aside>
                        <div className="content">
                            <img alt="Choosing the proper lighting" src={photoLight}/>
                            <h4>How-To: Lighting</h4>
                            <p>Morbi commodo, ipsum sed pharetra gravida magna rhoncus neque id pulvinar odio lorem non turpis nullam sit amet.</p>
                            <a title="Learn how to choose the proper lighting." href="http://codifydesign.com">Learn more</a>
                        </div>
                    </aside>
                    <blockquote>
                        <p className="quote">Lorem ipsum dolor sit amet conse ctetuer adipiscing elit. Morbi comod sed dolor sit amet consect adipiscing elit.</p>
                        <p className="credit"><strong>Author Name</strong><br/> <em>Business Title</em><br/> Company</p>
                    </blockquote>
                    
                </section>

            </div>
        );
    }
}

export default Dashboard;
