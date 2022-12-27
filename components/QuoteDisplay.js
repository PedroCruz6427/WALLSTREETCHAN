import { useEffect, useState } from "react";

function QuoteDisplay() {
  const quoteList = [
    "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life. - Confucius",
    "People give up so often because they tend to look at how far they still have to go, instead of how far they've already gotten.",
    "Be so busy improving yourself that you have no time to critisize others.",
    "One day or day one, it's your choice.",
    "Some people take so long, to say so little.",
    "Baths, drink, and sex corrupt our bodies, but baths, drink, and sex make our life worth living. - Graffiti in an ancient Roman Bath",
    "A fool is known by his speech, a wise man by his silence. - Pythagoras",
    "A rising tide lifts all ships",
    "Wise men speak because they have something to say, fools because they have to say something. - Plato",
    "Any person capable of angering you becomes your master, he can anger you only when you permit yourself to be disturbed by him. - Epictetus",
    "Small minds talk about people, average minds talk about events, and great minds talk about ideas.",
    "You become what you give your attention to. - Epictetus",
    "Never forget why you started",
    "If you're going through hell, keep going. - Winston Churchill",
    "Every morning we are born again. What we do today is what matters most. - Buddha",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "We have two ears and one mouth so that we can listen twice as much as we speak. - Epictetus",
    "We suffer more often in imagination than in reality. - Seneca",
    "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
    "Luck is what happens when preparation meets opportunity. - Seneca",
    "Happiness will never come to those who fail to appreciate what they already have - Buddha",
    "When anger rises, think of the consequences. - Confucius",
    "When you are content to be simply yourself and don't compare or compete, everyone will respect you. - Lao Tzu",
    "The best fighter is never angry. - Lao Tzu",
    "If you can't fly, then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward. -  Martin Luther King, Jr.",
    "Be content with what you have, rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you. - Lao Tzu",
    "A leader is best when people barely know he exists Of a good leader, who talks little, When his work is done, his aim fulfilled, They will say, “We did this ourselves.” ― Lao Tzu",
    "An empty vessel makes the loudest sound, so they that have the least wit are the greatest babblers. - Plato",
    "The measure of a man is what he does with power. - Plato",
    "The reason most people fail instead of succeed is they trade what they want most for what they want at the moment. ― Napoleon Bonaparte",
    "Ambition is the path to success. Persistence is the vehicle you arrive in. - Bill Bradley",
    "The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less. -Socrates",
    "I know that I am intelligent, because I know that I know nothing.- Socrates",
    "The unexamined life is not worth living. -Socrates",
    "No citizen has a right to be an amateur in the matter of physical training... what a disgrace it is for a man to grow old without ever seeing the beauty and strength of which his body is capable. - Socrates",
    "Pain is temporary. It may last a minute, or an hour, or a day, or a year, but eventually it will subside and something else will take its place. If you quit, however, it lasts forever. - Lance Armstrong",
    "Courage is not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. - Nelson mandela",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too. — Mark Twain",
    "Success is not final, failure is not fatal, it is the courage to continue that counts. — Winston S. Churchill",
    "Work until your bank account looks like a phone number.",
    "Talent wins games, but teamwork and intelligence win championships. — Michael Jordan",
    "Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it… Once you learn that, you'll never be the same again. —Steve Jobs",
    "I never look back, darling. It distracts from the now. — Edna Mode",
    "If you are the smartest person in the room, then you are in the wrong room. - Confucius",
    "Real knowledge is to know the extent of one's ignorance. - Confucius",
    "Choose a job you love, and you will never have to work a day in your life. - Confucius",
    "The distance between dreams and reality is called discipline. - Paulo Coelho",
    "Without commitment you'll never start, without consistency you'll never finish. - Denzel Washington",
    "It is not death that a man should fear, but he should fear never beginning to live. - Marcus Aurelius",
    "The happiness of your life depends upon the quality of your thoughts - Marcus Aurelius",
    "Very little is needed to make a happy life, it is all within yourself, in your way of thinking. - Marcus Aurelius",
    "Wealth consists not in having great possessions, but in having few wants. - Epictetus",
    "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it, and this you have the power to revoke at any moment. - Marcus Aurelius",
    "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has. - Epictetus",
  ];
  const [randomQuoteIndex, setRandomQuoteIndex] = useState("");
  useEffect(() => {
    setRandomQuoteIndex(Math.floor(Math.random() * quoteList.length));
  }, [setRandomQuoteIndex, quoteList.length]);

  return `"${quoteList[randomQuoteIndex]}"`;
}

// const randomQuoteIndex = Math.floor(Math.random() * quoteList.length);

//   return `"${quoteList[randomQuoteIndex]}"`;

export default QuoteDisplay;
