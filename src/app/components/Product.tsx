import Image from "next/image";

export default function Product() {
  return (
    <div className="w-full bg-black text-white flex flex-wrap justify-center items-center py-7 px-4 gap-12 md:gap-16">
      {/* Group Image */}
      <div>
        <Image src="/Group.png" alt="Group logo" width={80} height={30} />
      </div>

      {/* Zara */}
      <div>
        <Image src="/zara-logo-1 1.png" alt="Zara logo" width={80} height={30} />
      </div>

      {/* Gucci */}
      <div>
        <Image src="/gucci-logo-1 1.png" alt="Gucci logo" width={80} height={30} />
      </div>

      {/* Prada */}
      <div>
        <Image src="/prada-logo-1 1.png" alt="Prada logo" width={80} height={30} />
      </div>

      {/* Calvin Klein */}
      <div>
        <Image src="/Group (1).png" alt="Calvin Klein logo" width={90} height={30} />
      </div>
    </div>
  );
}