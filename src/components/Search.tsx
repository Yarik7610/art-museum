import search from "#assets/search.svg"
import { useCallback, useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { debounce } from "../utils/debounce"

interface SearchProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

interface FormState {
  value: string
}
export const Search = ({ setQuery }: SearchProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormState>()

  const debouncedSetQuery = useCallback(
    debounce((query: string) => setQuery(query), 400),
    []
  )

  useEffect(() => {
    const subscription = watch((state) => onSubmit(state as FormState))
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit: SubmitHandler<FormState> = (data) => {
    debouncedSetQuery(data.value)
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("value")} className="search__input" type="text" placeholder="Search Art, Artist, Work..." />
        {errors?.value && <p>{errors.value.message}</p>}
        <img src={search} alt="Search icon" />
      </form>
    </div>
  )
}
