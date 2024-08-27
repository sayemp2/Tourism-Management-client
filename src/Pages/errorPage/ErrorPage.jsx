import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
            <div className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>
                                </div>
                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you are lost
                                    </h3>
                                    <p>the page you are looking for not available!</p>
                                   <Link to={'/'}> <button className="btn bg-[#63ab45] mt-3 font-Montserrat text-white text-xl border-none">Go To Home</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ErrorPage;