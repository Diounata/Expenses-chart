export function useHover() {
  let element: HTMLElement;

  const onHover: React.MouseEventHandler<HTMLElement> = e => {
    if (!element) element = e.currentTarget.querySelector('div')!.querySelector('div')!;

    element.style.top = `-2.5rem`;
  };

  const outHover: React.MouseEventHandler<HTMLElement> = () => {
    element.style.top = '-9999px';
  };

  return { onHover, outHover };
}
