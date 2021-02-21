import React, { useState } from 'react';
import { Router, Link, navigate } from '@reach/router';
import Modal from './Modal';
import AddressForm from './AddressForm';
import MatchTester from './MatchTester';


const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [showTester, setShowTester] = useState(false);
    const toggleModal = () => setShowModal(!showModal);
    const openMatchTester = () => setShowTester(!showTester);
    return (
        <div className="container">
            <Link to="/map-loader">
                <button>
                    Assignment
                </button>

            </Link>
            <Link to="/" onClick={toggleModal}>
                <button>
                    New Address
                </button>
            </Link>
            <Link to="/" onClick={openMatchTester}>
                <button>
                    Word Match
                </button>
            </Link>
            {
                showModal ? (
                    <Modal>
                        <div>
                            <h1>
                                Would you like to add a new place?
                            </h1>
                            <AddressForm />
                            <div className="buttons">
                                <button onClick={toggleModal}>Cancel</button>
                            </div>
                        </div>
                    </Modal>
                ) : null}

            {
                showTester ? (
                    <Modal>
                        <div>
                            <h1>
                                Please write a word to test
                            </h1>
                            <MatchTester />
                            <div className="buttons">
                                <button onClick={openMatchTester}>Cancel</button>
                            </div>
                        </div>
                    </Modal>
                ) : null}
        </div>
    );
};

export default Home;