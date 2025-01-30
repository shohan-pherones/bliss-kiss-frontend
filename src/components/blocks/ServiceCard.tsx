import { Service } from "@/interfaces";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <article className="card bg-base-100 shadow-md">
      <figure className="aspect-video">
        <Image
          src={service.banner}
          alt={service.title}
          width={1280}
          height={720}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <span className="badge badge-secondary">
          {service.specialists.length} specialist
          {service.specialists.length > 1 ? "s" : ""}
        </span>
        <h2 className="card-title">{service.title}</h2>
        <p className="text-sm opacity-50">{service.shortDescription}</p>
        <ul>
          {service.perks.map((perk, index) => (
            <li key={index + perk} className="flex items-center gap-2">
              <Check size={16} className="text-accent" />
              {perk}
            </li>
          ))}
        </ul>
        <div className="card-actions items-center justify-between">
          <h2 className="flex">
            <span className="card-title">${service.baseCost}</span>
            <span className="self-end text-sm opacity-50">
              /{service.durations[0]} mins
            </span>
          </h2>
          <Link href={`/services/${service.id}`} className="btn btn-accent">
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
