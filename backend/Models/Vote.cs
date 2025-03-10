using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Vote
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("user_id")]
        public int UserId { get; set; }

        [Required]
        [Column("post_id")]
        public int PostId { get; set; }

        [Required]
        [Column("comment_id")]
        public int CommentId { get; set; }

        [Required]
        [MaxLength(50)]
        [Column("vote_type")]
        public required string VoteType { get; set; }

        [Required]
        [Column("vote_date")]
        public DateTime VoteDate { get; set; } = DateTime.UtcNow;

        // Navigation properties
        [ForeignKey("UserId")]
        public required User User { get; set; }
        [ForeignKey("PostId")]
        public required BlogPost BlogPost { get; set; }
        [ForeignKey("CommentId")]
        public required Comment Comment { get; set; }
    }
}
