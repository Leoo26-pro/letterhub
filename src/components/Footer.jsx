const footer = () => {
    return (
        <div className="footer bg-white shadow mt-20" id="footer">
            <div className="container mx-auto py-4 flex items-center justify-between">
                <p className="py-2">
                    &copy; Copyright by <span>SandyAdiyatma</span>
                </p>
                <div className="social-footer flex items-center sm:gap-7 gap-2">
                    <i className="ri-facebook-circle-fill text-2xl"></i>
                    <i className="ri-instagram-fill text-2xl"></i>
                    <i className="ri-linkedin-box-fill text-2xl"></i>
                </div>
            </div>
        </div>
    );
};

export default footer;
