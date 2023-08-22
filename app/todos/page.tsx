import { Trash2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Todos() {
  const todos = [
    {
      userId: 1,
      id: 1,
      title:
        "delectus aut autem teri maak k chut lanfeunfs ksejbjfskjebfsejf  sebkejfe,j.f belf  sejkfbselfubehssd sejhlfbe",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
    {
      userId: 1,
      id: 11,
      title: "vero rerum temporibus dolor",
      completed: true,
    },
    {
      userId: 1,
      id: 12,
      title: "ipsa repellendus fugit nisi",
      completed: true,
    },
  ];

  return (
    <div className="container grid justify-center max-w-xl">
      {todos.map((todo) => (
        <Card className="m-3 relative" key={todo.id}>
          <div className="w-4/5 float-left">
            <CardHeader>{todo.title}</CardHeader>
            <CardContent>{todo.id}</CardContent>
          </div>
          <div className="w-1/4 float-right">
            <Button className="bg-transparent absolute right-3 top-7">
              <Trash2 color="blue" />
            </Button>
            <Checkbox className="scale-150 absolute top-3 right-3"></Checkbox>
          </div>
        </Card>
      ))}
    </div>
  );
}
