using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int PostId { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public required string CommentText { get; set; }

        [Required]
        public DateTime CommentDate { get; set; } = DateTime.UtcNow;

        public int? ParentCommentId { get; set; }

        // Navigation properties
        [ForeignKey("PostId")]
        public required BlogPost BlogPost { get; set; }
        [ForeignKey("UserId")]
        public required User User { get; set; }
        [ForeignKey("ParentCommentId")]
        public Comment? ParentComment { get; set; }
        public required ICollection<Comment> Replies { get; set; }
    }
}