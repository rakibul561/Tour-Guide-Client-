
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#00B19D] sm:footer-horizontal  text-white  p-10">
  <aside>
  <h2 className="font-bold text-lg md:text-2xl ">

  <span
               className="text-2xl font-bold bg-gradient-to-r from-white via-yellow-500 to-[#000000] text-transparent bg-clip-text animate-gradient">EasyTrips</span>

</h2>
    <p className="mt-5">
      Tourist Industries Ltd.
      <br />
      Providing reliable tech since 2020
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

        </div>
    );
};

export default Footer;