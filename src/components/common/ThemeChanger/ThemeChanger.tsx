import { HiMoon, HiSun } from 'react-icons/hi'
import { useTheme } from 'next-themes'

export default function ThemeChanger(): JSX.Element {
  const { theme, setTheme } = useTheme()

  return (
    <div className="z-50 fixed bottom-2 left-2">
      <button
        onClick={() =>
          theme == 'dark'
            ? setTheme('light')
            : theme == 'light'
            ? setTheme('dark')
            : setTheme('light')
        }
        className="btn btn-circle"
      >
        {theme === 'light' ? (
          <HiMoon className="text-xl" />
        ) : (
          <HiSun className="text-xl" />
        )}
      </button>
    </div>
  )
}
