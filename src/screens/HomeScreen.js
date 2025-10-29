import { useRef } from 'react';
import SwipeableScreen from '../components/templates/SwipeableScreen';
import CardActions from '../components/molecules/CardActions';
import { useOpponents } from '../hooks/useOpponents';
import { useLikedOpponentsStore } from '../store/useLikedOpponentsStore';

export default function HomeScreen() {
  const ref = useRef(null);
  const { data: opponents = [], isLoading, refetch } = useOpponents();
  const addLikedOpponent = useLikedOpponentsStore((s) => s.addLikedOpponent);

  if (isLoading) { return null; }

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
          onStar={() => alert('Not implemented yet.')}
          onMessage={() => alert('Not implemented yet.')}
        />
      }
    />
  );
}
