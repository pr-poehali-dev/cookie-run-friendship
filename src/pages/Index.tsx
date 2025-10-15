import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const messages = [
  {
    id: 1,
    character: "Pure Vanilla Cookie",
    text: "Привет! Ты читаешь это, верно? Ты очень милый друг, Милли.",
    image: "https://cdn.poehali.dev/files/d99d212e-6e5a-4f72-9280-2012fd83f420.jpg"
  },
  {
    id: 2,
    character: "Shadow Milk Cookie",
    text: "Ты так же очень интересный собеседник, Миф клянётся левым пальцем.",
    image: "https://cdn.poehali.dev/files/4042f699-ff22-44c8-847b-c25f58d97ab3.jpg"
  },
  {
    id: 3,
    character: "Pure Vanilla Cookie",
    text: "Я очень рад, что познакомился с тобой, дорогая. Ты действительно радуешь меня каждый день.",
    image: "https://cdn.poehali.dev/files/26539e81-5c2a-4c9d-a939-bd7134e1d8d3.jpg"
  },
  {
    id: 4,
    character: "Shadow Milk Cookie",
    text: "Твоя улыбка освещает даже самые тёмные уголки королевства! Продолжай сиять!",
    image: "https://cdn.poehali.dev/files/5d02f960-3473-4737-9af8-ed8921cd27e0.jpg"
  },
  {
    id: 5,
    character: "Pure Vanilla Cookie",
    text: "С тобой время летит незаметно. Каждый разговор - это маленькое волшебство.",
    image: "https://cdn.poehali.dev/files/dde10a7a-a9ac-4552-b098-949e12a9cb30.jpg"
  },
  {
    id: 6,
    character: "Shadow Milk Cookie",
    text: "Знаешь, я не часто говорю такое, но ты особенная. Правда-правда!",
    image: "https://cdn.poehali.dev/files/4042f699-ff22-44c8-847b-c25f58d97ab3.jpg"
  },
  {
    id: 7,
    character: "Pure Vanilla Cookie",
    text: "Твоя доброта и искренность вдохновляют меня быть лучше каждый день.",
    image: "https://cdn.poehali.dev/files/d99d212e-6e5a-4f72-9280-2012fd83f420.jpg"
  },
  {
    id: 8,
    character: "Shadow Milk Cookie",
    text: "Месяц знакомства - это только начало нашей дружбы! Впереди много приключений!",
    image: "https://cdn.poehali.dev/files/5d02f960-3473-4737-9af8-ed8921cd27e0.jpg"
  },
  {
    id: 9,
    character: "Pure Vanilla Cookie",
    text: "Спасибо, что ты есть. Ты делаешь этот мир немного добрее и светлее.",
    image: "https://cdn.poehali.dev/files/26539e81-5c2a-4c9d-a939-bd7134e1d8d3.jpg"
  },
  {
    id: 10,
    character: "Shadow Milk Cookie",
    text: "Ты прошла весь путь! Горжусь тобой, дорогая подруга! 💜",
    image: "https://cdn.poehali.dev/files/dde10a7a-a9ac-4552-b098-949e12a9cb30.jpg"
  }
];

export default function Index() {
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  const [currentMessage, setCurrentMessage] = useState<number | null>(null);
  const [showFinal, setShowFinal] = useState(false);

  const handleCardClick = (id: number) => {
    if (!openedCards.includes(id)) {
      setOpenedCards([...openedCards, id]);
      setCurrentMessage(id);
    }
  };

  const handleCloseMessage = () => {
    setCurrentMessage(null);
    if (openedCards.length === 10) {
      setShowFinal(true);
    }
  };

  if (showFinal) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-200 flex items-center justify-center p-4 animate-fade-in">
        <Card className="max-w-2xl w-full p-8 md:p-12 bg-white/90 backdrop-blur-sm shadow-2xl border-4 border-yellow-300 text-center">
          <div className="space-y-6">
            <div className="flex justify-center gap-2 animate-scale-in">
              <Icon name="Heart" size={48} className="text-pink-500 animate-pulse" />
              <Icon name="Sparkles" size={48} className="text-yellow-500 animate-pulse" />
              <Icon name="Heart" size={48} className="text-pink-500 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 font-montserrat">
              С месяцем общения!
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-rubik">
              Если ты дошла до конца, пришли мне фото сверчка 🦗
            </p>
            <div className="flex justify-center gap-2 pt-4">
              <Icon name="Cookie" size={32} className="text-orange-400" />
              <Icon name="Star" size={32} className="text-yellow-400" />
              <Icon name="Cookie" size={32} className="text-orange-400" />
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (currentMessage !== null) {
    const message = messages.find(m => m.id === currentMessage);
    if (!message) return null;

    const isPureVanilla = message.character === "Pure Vanilla Cookie";

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-orange-200 flex items-center justify-center p-4 animate-fade-in">
        <Card className="max-w-lg w-full bg-white/95 backdrop-blur-sm shadow-2xl border-4 border-pink-400 overflow-hidden animate-scale-in">
          <div className="relative">
            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
              <img 
                src={message.image} 
                alt={message.character}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-2xl font-bold text-center font-montserrat text-white drop-shadow-lg">
                  {message.character}
                </h3>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <Button
                onClick={handleCloseMessage}
                className="rounded-full w-12 h-12 bg-pink-500 hover:bg-pink-600 shadow-lg"
                size="icon"
              >
                <Icon name="X" size={24} />
              </Button>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-lg text-gray-800 text-center leading-relaxed font-rubik">
              {message.text}
            </p>
            <div className="flex justify-center gap-1">
              <Icon name="Heart" size={20} className="text-pink-500" />
              <Icon name="Heart" size={20} className="text-pink-500" />
              <Icon name="Heart" size={20} className="text-pink-500" />
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-yellow-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 font-montserrat"
            style={{ 
              textShadow: '3px 3px 0 rgba(255,255,255,0.8), -1px -1px 0 rgba(0,0,0,0.1)'
            }}
          >
            COOKIE RUN HEARTS
          </h1>
          <p className="text-xl md:text-2xl text-purple-800 font-rubik">
            Открой все сердечки и прочитай послания! 💜
          </p>
          <div className="flex justify-center gap-2">
            <Icon name="Sparkles" size={24} className="text-yellow-500" />
            <span className="text-lg font-bold text-gray-800 font-rubik">
              {openedCards.length} / 10
            </span>
            <Icon name="Sparkles" size={24} className="text-yellow-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {messages.map((msg) => {
            const isOpened = openedCards.includes(msg.id);
            return (
              <button
                key={msg.id}
                onClick={() => handleCardClick(msg.id)}
                className={`
                  aspect-square rounded-3xl transition-all duration-500 transform
                  ${isOpened 
                    ? 'bg-gradient-to-br from-pink-200 to-purple-200 scale-95 opacity-60' 
                    : 'bg-gradient-to-br from-pink-400 to-pink-600 hover:scale-110 hover:rotate-3 shadow-2xl hover:shadow-pink-500/50'
                  }
                  border-4 border-white flex items-center justify-center
                  ${!isOpened && 'animate-pulse cursor-pointer'}
                `}
                disabled={isOpened}
              >
                <Icon 
                  name={isOpened ? "Check" : "Heart"} 
                  size={48} 
                  className={`${isOpened ? 'text-purple-400' : 'text-white'} transition-all duration-300`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}