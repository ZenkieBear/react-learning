// props
type ChildrenProps = {
  children: ReactNode,
}

type AlertButtonProps = {
  message: string
} & ChildrenProps;

type Button1Props = {
  onClick: MouseEventHandler
} & ChildrenProps;

type Button2Props = {
  onSmash: MouseEventHandler
} & ChildrenProps;
