import "../styles/About.scss"

const About = () => {
    return (
        <>
            <section className="about-overview">
                <div className="container">

                    <div className="left-content">
                        <h2>An Overview of Market Leader in Supply Chain & Logistics</h2>

                        <p>
                            Safexpress started its journey in 1997 with a mission of delivering
                            logistics excellence to its customers and ensuring their future success
                            through its impeccable network, direct routes, 24 x 7 operations
                            continuity and high-quality services.
                        </p>

                        <p>
                            Over time, the firm has firmly entrenched itself as the
                            <strong>‘Knowledge Leader’</strong> and
                            <strong>‘Market Leader’</strong> of supply chain & logistics industry in
                            India.
                        </p>

                        <h3>Who we are?</h3>

                        <p>
                            Safexpress is India’s largest logistics and supply chain services company,
                            offering a complete spectrum of logistics services including Express
                            Distribution, 3PL & Consulting to more than 5000 customers in B2B domain
                            and also serves C2C customers through specially crafted, value-added
                            express distribution services.
                        </p>

                        <p>
                            With its expertise across industries ranging from Healthcare, Automotive,
                            Hi-Tech, FMCG, Consumer Electronics to Engineering, Books & Periodicals
                            and Alliance Partner Management, Safexpress meets diverse customer needs
                            efficiently.
                        </p>
                    </div>

                    <div className="right-content">
                        <div className="info-card vision">
                            <h4>Vision</h4>
                            <p>
                                To become the most preferred partner to provide a single window
                                solution for entire supply chain and logistics needs of our esteemed
                                customers Pan India and thereby contribute to their as well as
                                country’s growth.
                            </p>
                        </div>

                        <div className="info-card mission">
                            <h4>Mission</h4>
                            <p>
                                We shall internalize a customer-centric & people-centric work culture,
                                which demonstrates a proactive, result-oriented, zero conflict &
                                problem-solving attitude towards surpassing company objectives through
                                perfect alignment with company policies & guidelines.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            <section className="six-grid-section">
                <div className="six-grid">

                    <div className="grid-item image">
                        <img src="https://www.safexpress.com/assets/images/Safex-found-fg.jpg" alt="Foundation" />
                    </div>

                    <div className="grid-item content">
                        <h3>Safexpress Foundation</h3>
                        <p>
                            As an ethical partner to our stakeholders and a responsible corporate,
                            Safexpress aims to fulfil its social and environmental commitments
                            through its foundation.
                        </p>
                        <a href="#">More</a>
                    </div>

                    <div className="grid-item image">
                        <img src="https://www.safexpress.com/assets/images/value-strategy-fg.jpg" alt="Teamwork" />
                    </div>

                    <div className="grid-item content">
                        <h3>Vision and Strategy</h3>
                        <p>
                            Safexpress provides plethora of customised and express logistics
                            solutions to cater to the supply chain and logistics requirements
                            of its customers.
                        </p>
                        <a href="#">More</a>
                    </div>

                    <div className="grid-item image">
                        <img src="https://www.safexpress.com/assets/images/work-culture-fg.jpeg" alt="Values" />
                    </div>

                    <div className="grid-item content">
                        <h3>Work Culture</h3>
                        <p>
                            Safexpress offers unlimited growth & learning opportunities to anyone
                            who wishes to associate and work with India’s most preferred logistics
                            and SCM brand.
                        </p>
                        <a href="#">More</a>
                    </div>

                </div>
            </section>


        </>
    )
}

export default About;