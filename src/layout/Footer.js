import React from 'react';

function Footer() {
    return (
        <>
            <footer className="container mt-5 pt-3 border-top">
                <div className="row">
                    <div className="col-2 col-md">
                        <img
                            className="mb-2"
                            src="https://jdkservices.in/wp-content/uploads/2022/09/Myntra_logo.png"
                            alt=""
                            width={200}
                            height={60}
                        />
                        <small className="d-block text-body-secondary">© 2023-2024</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Cool stuff
                                </a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Random feature
                                </a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Team feature
                                </a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Stuff for developers
                                </a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Another one
                                </a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Last time
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Resource
                                </a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Resource name
                                </a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Another resource
                                </a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Final resource
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Team
                                </a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Locations
                                </a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Privacy
                                </a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer