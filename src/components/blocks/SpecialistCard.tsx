import { Specialist } from "@/interfaces";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SpecialistCardProps {
  specialist: Specialist;
}

const SpecialistCard = ({ specialist }: SpecialistCardProps) => {
  return (
    <article className="card bg-base-100 shadow-md">
      <figure className="aspect-square">
        <Image
          src={specialist.image}
          alt={specialist.name}
          width={1080}
          height={1080}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <span className="badge badge-secondary">{specialist.designation}</span>
        <h2 className="card-title">{specialist.name}</h2>
        <p className="text-sm opacity-50">{specialist.bio}</p>
        <ul>
          {specialist.secretOfferings.map((offering, index) => (
            <li key={index + offering} className="flex items-center gap-2">
              <Check size={16} className="text-accent" />
              {offering}
            </li>
          ))}
        </ul>
        <div className="card-actions items-center justify-between">
          <h2 className="card-title">${specialist.hireCost}</h2>
          <Link
            href={`/specialists/${specialist.id}`}
            className="btn btn-accent"
          >
            Hire Now
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SpecialistCard;
