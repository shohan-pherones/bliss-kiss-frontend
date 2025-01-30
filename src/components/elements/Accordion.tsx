interface AccordionItemProps {
  title: string;
  content: string;
  isDefaultChecked?: boolean;
}

interface AccordionProps {
  items: { title: string; content: string; isDefaultChecked?: boolean }[];
}

const AccordionItem = ({
  title,
  content,
  isDefaultChecked,
}: AccordionItemProps) => (
  <div className="collapse collapse-arrow">
    <input type="radio" name="my-accordion" defaultChecked={isDefaultChecked} />
    <div className="collapse-title text-xl font-medium">{title}</div>
    <div className="collapse-content">
      <p>{content}</p>
    </div>
  </div>
);

const Accordion = ({ items }: AccordionProps) => (
  <div>
    {items.map((item, index) => (
      <AccordionItem
        key={index}
        title={item.title}
        content={item.content}
        isDefaultChecked={item.isDefaultChecked}
      />
    ))}
  </div>
);

export default Accordion;
