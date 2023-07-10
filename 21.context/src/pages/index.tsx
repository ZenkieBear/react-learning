import Heading from "./Heading";
import Section from "./Section";

export default function App() {
  return (
    // <Section>
    //   <Heading level={1}>Title</Heading>
    //   <Heading level={2}>Heading</Heading>
    //   <Heading level={3}>Sub-heading</Heading>
    //   <Heading level={4}>Sub-sub-heading</Heading>
    //   <Heading level={5}>Sub-sub-sub-heading</Heading>
    //   <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
    // </Section>
    
    // Let's say you want multiple headings within the same `Section` to always have the same size:
    // <Section>
    //   <Heading level={1}>Title</Heading>
    //   <Section>
    //     <Heading level={2}>Heading</Heading>
    //     <Heading level={2}>Heading</Heading>
    //     <Heading level={2}>Heading</Heading>
    //     <Section>
    //       <Heading level={3}>Sub-heading</Heading>
    //       <Heading level={3}>Sub-heading</Heading>
    //       <Heading level={3}>Sub-heading</Heading>
    //       <Section>
    //         <Heading level={4}>Sub-sub-heading</Heading>
    //         <Heading level={4}>Sub-sub-heading</Heading>
    //         <Heading level={4}>Sub-sub-heading</Heading>
    //       </Section>
    //     </Section>
    //   </Section>
    // </Section>
    /*
     * Update the JSX so that it's the `Section` that receives it instead
     */
    // <Section>
    //   <Heading>Title</Heading>
    //   <Section>
    //     <Heading>Heading</Heading>
    //     <Heading>Heading</Heading>
    //     <Heading>Heading</Heading>
    //     <Section>
    //       <Heading>Sub-heading</Heading>
    //       <Heading>Sub-heading</Heading>
    //       <Heading>Sub-heading</Heading>
    //       <Section>
    //         <Heading>Sub-sub-heading</Heading>
    //         <Heading>Sub-sub-heading</Heading>
    //         <Heading>Sub-sub-heading</Heading>
    //       </Section>
    //     </Section>
    //   </Section>
    // </Section>
    <Section>
      <Heading>My profile</Heading>
      <Post
        title="Hello traveller!"
        body="Read about my adventures."
      />
      <AllPosts />
    </Section>
  )
}

function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  )
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post
        title="Flavors of Lisbon"
        body="...those pastéis de nata!"
      />
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"
      />
    </Section>
  )
}

function Post({title, body}: PostProps) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
    </Section>
  )
}
