import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Image
        src="/image.png"
        alt="rocks water and mountains"
        fill={true}
        className="md:relative hidden md:block"
      ></Image>
      <div className="flex flex-col items-center justify-around">
        <p className="md:absolute md:flex md:flex-col md:justify-center text-center md:top-44 md:m-20 md:p-10 md:rounded md:bg-nBlue/80 bg-nBlue/30 md:w-1/2 md:min-h-96 md:h-auto md:flex md:items-center md:text-xl md:text-white  text-nBlue">
         At
                  <h1 className="bold text-2xl">First Fruits Christian Counseling Center</h1>
        we are committed to
          providing biblical-based counseling that integrates the timeless
          wisdom of God's Word with professional counseling expertise that
          allows God's counsel to pour through us into our clients. We believe
          Jesus Christ is The Prince of Peace and a Wonderful Counselor. He is
          our great physician, and it is through Him and in Him that we find our
          true mental, emotional, and spiritual healing.
        </p>
      </div>
    </>
  );
}
