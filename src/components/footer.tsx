import { FC } from 'react';

interface FooterCProps {

}

const FooterC: FC<FooterCProps> = ({ }) => {
    return (
        <>
            <footer>
                <div className='d-flex flex-wrap bg-dark text-light justify-content-evenly p-3 gap-5 '>
                    <div>
                        <h6>ABOUT</h6>

                        <p>Contact us</p>
                        <p>About us</p>
                        <p>Careers</p>
                    </div>

                    <div>
                        <h6>GROUP COMPANIES</h6>

                        <p>Myntra</p>
                        <p>Shopsy</p>
                    </div>

                    <div>
                        <h6>HELP</h6>

                        <p>Payments</p>
                        <p>Shipping</p>
                        <p>Cancellation</p>
                    </div>

                    <div>
                        <h6>CONSUMER POLICY</h6>
                        <p>Cancellation and Return policy</p>
                        <p>Terms of use</p>
                        <p>Security</p>
                        <p>Privacy</p>
                        <p>EPR compliance</p>
                    </div>

                    <div>
                        <h6>Mail us:</h6>
                        <p>Ekart internet private limited,Bengaluru</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterC;