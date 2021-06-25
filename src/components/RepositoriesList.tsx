import { FC, useState, ChangeEvent } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositoriesList: FC = () => {
    const [ term, setTerm ] = useState('');
    const { searchRepositories } = useActions();

    // Works similar to MapStateToProps Function by using useSelector Hook
    const { data, error, loading } = useTypedSelector(
        state => state.repositories
    );

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)}/>
                <button>Search</button>
            </form>
        </div>
    )
};

export default RepositoriesList;