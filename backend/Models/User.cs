using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class User
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        [Column("username")]
        public required string Username { get; set; }

        [Required]
        [MaxLength(255)]
        [Column("password")]
        public required string Password { get; set; }

        [Required]
        [EmailAddress]
        [MaxLength(100)]
        [Column("email")]
        public required string Email { get; set; }

        [Required]
        [MaxLength(50)]
        [Column("role")]
        public required string Role { get; set; }

        [Required]
        [Column("created_at")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation properties
        public ICollection<Payment>? Payments { get; set; }
        public ICollection<Comment>? Comments { get; set; }
        public ICollection<Vote>? Votes { get; set; }
    }
}
