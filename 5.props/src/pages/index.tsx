import { Person } from './types';
import { getImageUrl } from "./utils"
import { ReactNode } from 'react';
import { FC } from 'react';

// Step 2, read props in child component.
// props is the only one parameter for react components
function Avatar({
  person = {} as Person,
  size = 100 // add a `=` and default value after a property to specify a default value.
}) {
  return (
    // Props are infomations passed to tags. .e.g className, src, alt, width and height.
    <img
      className="avatar"
      // src="https://i.imgur.com/1bX5QH6.jpg"
      // alt="Lin Lanying"
      // width={100}
      // height={100}

      // using props
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

function Card({ children = {} as ReactNode | ReactNode[] }) {
  return (
    <div className='card'>
      { children }
    </div>
  )
}

function Profile(props: any) {
  return (
    <>
      <Avatar
        // Step 1, pass props to a component
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
        size={100}
      />
      <Avatar
        person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }}
        size={80}
      />
      <Avatar
        person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
        size={50}
      />
      <Card>
        <Avatar
          // using spread syntax to transfer props
          {...props}
        />
      </Card>
    </>
  )
}

export default function App() {
  return (
    <Profile
      size={120}
      person={{
        name: 'Zenkie Bear',
        imageId: 'FLqawmq'
      }}
      />
  )
}