import { ReactNode } from "react"

// export default function Button() {
function Button() {
  // Define a event handler
  function handleClick() {
    // Implement the logic inside the function
    alert('You clicked me!')
  }
  return (
    <>
      {/* Add `onClick={handleClick}` to JSX */}
      <button onClick={handleClick}>
        No bind event handler.
      </button>
      {/* You define a inline event handler */}
      <button onClick={function () {
        alert('You clicked me!')
      }}>
        No bind event handler.
      </button>
      {/* Arrow function is also corrected, very convenient! */}
      <button onClick={() => alert('You clicked me!')}>
        No bind event handler.
      </button>
    </>
  )
}

function AlertButton({ message, children }: AlertButtonProps) {
  return (
    // Your event handler can access props, if it's inside your component.
    <button onClick={() => alert(message)}>
      {children}
    </button>
  )
}

function Button1({ onClick, children }: Button1Props) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}
function PlayButton({ movieName = '' }) {
  function handlePlayClick() {
    alert(`Is playing ${movieName}`)
  }

  return (
    // Event handler could be pass in as props.
    <Button1 onClick={handlePlayClick}>
      Play "{movieName}"
    </Button1>
  )
}

function UploadButton() {
  return (
    <Button1 onClick={() => alert('Uploading!')}>
      Upload image.
    </Button1>
  )
}

// export default function Toolbar() {
function Toolbar() {
  return (
    <div>
      {/* <AlertButton message="Is playing">
        Play movie
      </AlertButton>
      <AlertButton message="Is uploading">
        Upload image
      </AlertButton> */}
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  )
}

// This component defined a named event handler prop.
function Button2({ onSmash, children }: Button2Props) {
  return (
    <button onClick={e => {
      // Stop the propagation
      e.stopPropagation();
      onSmash();
    }}>
      {children}
    </button>
  )
}

// export default function App() {
function App() {
  return (
    // Event will be passed up the document tree
    // In react, every events will be propagated, but `onScroll`.
    <div
      onClick={() => alert('You clicked toolbar')}
      /**
       * Add suffix `Capture` will make parent component catch all events on child elements, even they stopped
       * propagation.
       */
      onClickCapture={() => console.log('clicked toolbar')}
    >
      <Button2 onSmash={() => {
        alert('Playing!')
      }}>
        Play movie
      </Button2>
      <Button2 onSmash={() => alert('Uploading!')}>
        Upload image
      </Button2>
    </div>
  )
}

export default function Signup() {
  return (
    // Use preventDefault() stop the default event action.
    <form onClick={e => {
      e.preventDefault();
      alert('Form submit!')
    }}>
      <input />
      <button>Send</button>
    </form>
  )
}
