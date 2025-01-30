import { Service } from "@/interfaces";

interface ServiceBookingPartitionProps {
  service: Service;
}

const ServiceBookingPartition = ({ service }: ServiceBookingPartitionProps) => {
  console.log(service);
  return <div>ServiceBookingPartition</div>;
};

export default ServiceBookingPartition;
