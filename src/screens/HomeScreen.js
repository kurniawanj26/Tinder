import { useRef } from 'react';
import SwipeableScreen from '../components/templates/SwipeableScreen';
import CardActions from '../components/molecules/CardActions';
import { useOpponents } from '../hooks/useOpponents';
import { useLikedOpponentsStore } from '../store/useLikedOpponentsStore';
import { Alert } from 'react-native';

export default function HomeScreen() {
  const ref = useRef(null);
  const { data: opponents = [], isLoading, refetch } = useOpponents();
  const addLikedOpponent = useLikedOpponentsStore((s) => s.addLikedOpponent);

  if (isLoading) { return null; }

  const handleNotImplemented = () => {
    Alert.alert('Not implemented yet.');
  };

  return (
    <SwipeableScreen
      ref={ref}
      data={opponents}
      onSwipedRight={(index) => {
        const liked = opponents[index];
        if (liked) { addLikedOpponent(liked); }
      }}
      onRefreshData={refetch}
      showActions={true}
      actions={
        <CardActions
          onDislike={() => ref.current?.swipeLeft()}
          onLike={() => ref.current?.swipeRight()}
          onRewind={() => ref.current?.swipeBack()}
          onStar={() => handleNotImplemented()}
          onMessage={() => handleNotImplemented()}
        />
      }
    />
  );
}
