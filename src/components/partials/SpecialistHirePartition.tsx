import { Specialist } from "@/interfaces";

interface SpecialistHirePartitionProps {
  specialist: Specialist;
}

const SpecialistHirePartition = ({
  specialist,
}: SpecialistHirePartitionProps) => {
  console.log(specialist);
  return <div>SpecialistHirePartition</div>;
};

export default SpecialistHirePartition;
