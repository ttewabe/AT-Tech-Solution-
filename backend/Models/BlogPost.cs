using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class BlogPost
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public required string Title { get; set; }

        [Required]
        public required string Content { get; set; }

        [Required]
        public int AuthorId { get; set; }

        [Required]
        public DateTime PublishDate { get; set; } = DateTime.UtcNow;

        [Required]
        [MaxLength(100)]
        public required string Category { get; set; }

        [Required]
        [MaxLength(100)]
        public required string Tags { get; set; }

        // Navigation properties
        [ForeignKey("AuthorId")]
        public required Author Author { get; set; }
        public ICollection<Comment>? Comments { get; set; }
        public ICollection<Vote>? Votes { get; set; }
    }
}