import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useCountdown } from '../hooks/misc';

export default function NameACountry() {
  const [letter, setLetter] = useState<string>('');
  const letters = useRef<string>('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  const [state, setState] = useState<'waiting' | 'playing'>();
  const playTimer = useCountdown(3, () => setState(undefined));

  const updateLetter = () => {
    playTimer.restart();
    setState('playing');
    setLetter(letters.current[Math.floor(Math.random() * letters.current.length)]);
  };

  const waitTimer = useCountdown(5, updateLetter);

  return (
    <VStack flexGrow={1} justify="center" spacing="10" px="20" pb="20">
      {waitTimer.timeLeft > 0 ? (
        <Text fontSize="10rem">{waitTimer.timeLeft}</Text>
      ) : (
        <Text fontSize="10rem">{letter}</Text>
      )}
      {state === 'playing' && (
        <Text fontSize="10rem">{playTimer.timeLeft}</Text>
      )}
      <HStack>
        {!state && (
          <Button
            bg="#007bff"
            color="#fff"
            fontSize="2xl"
            px="16"
            py="8"
            textTransform="uppercase"
            onClick={waitTimer.restart}
          >
            {state === 'waiting' ? 'Ready' : 'Again'}
          </Button>
        )}
      </HStack>
    </VStack>
  );
}
