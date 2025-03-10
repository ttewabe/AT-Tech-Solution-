using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Author
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public required string Name { get; set; }

        [Required]
        public required string Bio { get; set; }

        public byte[]? ProfilePicture { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation properties
        public required ICollection<BlogPost> BlogPosts { get; set; }
    }
}