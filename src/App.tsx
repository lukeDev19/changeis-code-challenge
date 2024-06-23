import { useEffect, useState } from 'react';

interface Item {
  description: string,
  title: string,
  url: string
}

function App() {

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/images?_width=380')
      .then(res => res.json())
      .then(data => setItems(data.data));
  }, []);

  return (
    <>
      {items.map((item, index) => (
          <div key={index}>
            <a href={item.url}>{item.title}</a>
            <p>{item.description}</p>
          </div>
        ))}
    </>
  )
}

export default App
