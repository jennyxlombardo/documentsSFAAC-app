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
        <p className="md:absolute md:flex md:flex-col md:justify-center text-center md:top-44 md:m-20 md:p-3 md:rounded md:bg-dBlue/80  md:w-1/2 md:min-h-86 md:h-auto md:flex md:items-center md:text-xl md:text-white  text-nBlue">
         At
                 First Fruits Christian Counseling Center
        we are committed to
          providing biblical-based counseling that integrates the timeless
          wisdom of God&apos;s Word with professional counseling expertise that
          allows God&apos;s counsel to pour through us into our clients. We believe
          Jesus Christ is The Prince of Peace and a Wonderful Counselor. He is
          our great physician, and it is through Him and in Him that we find our
          true mental, emotional, and spiritual healing.
        </p>
      </div>
    </>
  );
}
