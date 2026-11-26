type PostFilterProps = {
  searchQuery: string;
  onSeachChange: (value: string) => void;
};
const PostFilter = ({ searchQuery, onSeachChange }: PostFilterProps) => {
  return (
    <div className="post-filter-container">
      <input
        type="text"
        placeholder="search"
        value={searchQuery}
        onChange={(e) => onSeachChange(e.target.value)}
      />
    </div>
  );
};

export default PostFilter;
