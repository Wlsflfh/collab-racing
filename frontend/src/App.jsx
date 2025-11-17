import { useState } from 'react';
import { useRacingGame } from './hooks/useRacingGame';
import ModeSelectionScreen from './components/ModeSelectionScreen';
import InputForm from './components/InputForm';
import RacingScreen from './components/RacingScreen';
import ResultScreen from './components/ResultScreen';
import WinnersHistoryScreen from './components/WinnersHistoryScreen';

/**
 * 메인 App 컴포넌트
 */
function App() {
  const [selectedMode, setSelectedMode] = useState(null); // 'classic' 또는 'item'
  
  const {
    gameState,
    carNames,
    raceHistory,
    randomNumbers,
    winners,
    error,
    startGame,
    resetGame,
    showResult,
    showHistory,
    backToInput,
  } = useRacingGame();

  /**
   * 모드 선택 핸들러
   */
  const handleSelectMode = (mode) => {
    setSelectedMode(mode);
  };

  /**
   * 게임 리셋 시 모드도 초기화
   */
  const handleResetGame = () => {
    setSelectedMode(null);
    resetGame();
  };

  return (
    <div className="App">
      {/* 모드 선택 화면 */}
      {gameState === 'input' && !selectedMode && (
        <ModeSelectionScreen onSelectMode={handleSelectMode} />
      )}

      {/* 입력 화면 (모드 선택 후) */}
      {gameState === 'input' && selectedMode && (
        <InputForm 
          onStartGame={startGame}
          onShowHistory={showHistory}
          error={error}
        />
      )}

      {gameState === 'racing' && (
        <RacingScreen
          carNames={carNames}
          raceHistory={raceHistory}
          randomNumbers={randomNumbers}
          onComplete={showResult}
        />
      )}

      {gameState === 'result' && (
        <ResultScreen
          winners={winners}
          carNames={carNames}
          raceHistory={raceHistory}
          onRestart={handleResetGame}
        />
      )}

      {gameState === 'history' && (
        <WinnersHistoryScreen
          onBack={backToInput}
        />
      )}
    </div>
  );
}

export default App;

