import { Meta, StoryFn } from "@storybook/react";
import Accordion, {
  AccordionItem,
  AccordionItemProps,
  AccordionProps,
} from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    items: {
      control: { type: "object" },
    },
  },
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

export const DefaultAccordion = Template.bind({});
DefaultAccordion.args = {
  items: [
    {
      title: "Accordion Item 1",
      content: "This is the content for the first accordion item.",
      isDefaultChecked: true,
    },
    {
      title: "Accordion Item 2",
      content: "This is the content for the second accordion item.",
    },
    {
      title: "Accordion Item 3",
      content: "This is the content for the third accordion item.",
    },
  ],
};

const ItemTemplate: StoryFn<AccordionItemProps> = (args) => (
  <AccordionItem {...args} />
);

export const DefaultAccordionItem = ItemTemplate.bind({});
DefaultAccordionItem.args = {
  title: "Single Accordion Item",
  content: "This is the content for a single accordion item.",
  isDefaultChecked: false,
};

export const SingleAccordionItemChecked = ItemTemplate.bind({});
SingleAccordionItemChecked.args = {
  title: "Checked Item",
  content: "This item is checked by default.",
  isDefaultChecked: true,
};
