export function* RandomAccessIterator<Element>(
  elements: Array<Element>,
  repeat: Boolean = false)
{
  do
  {
    let remainingElements = [...elements];

    while (remainingElements.length > 0)
    {
      const randomIndex = Math.floor(Math.random() * remainingElements.length);

      const randomElement = remainingElements[randomIndex];

      remainingElements = [
        ...remainingElements.slice(0, randomIndex),
        ...remainingElements.slice(randomIndex + 1)
      ];

      yield randomElement;
    }
  } while (repeat);
}
