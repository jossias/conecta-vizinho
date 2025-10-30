import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface RatingDialogProps {
  empreendedorId: string;
  empreendedorNome: string;
  userId: string | undefined;
  existingRating?: { classificacao: number; comentario: string | null } | null;
  onRatingSubmit: () => void;
}

export const RatingDialog = ({
  empreendedorId,
  empreendedorNome,
  userId,
  existingRating,
  onRatingSubmit,
}: RatingDialogProps) => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(existingRating?.classificacao || 0);
  const [comment, setComment] = useState(existingRating?.comentario || "");
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!userId) {
      toast({
        title: "Erro",
        description: "Você precisa estar logado para avaliar",
        variant: "destructive",
      });
      return;
    }

    if (rating === 0) {
      toast({
        title: "Erro",
        description: "Por favor selecione uma classificação",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase
        .from("avaliacoes")
        .upsert({
          empreendedor_id: empreendedorId,
          usuario_id: userId,
          classificacao: rating,
          comentario: comment || null,
        });

      if (error) throw error;

      toast({
        title: "Sucesso!",
        description: existingRating
          ? "Sua avaliação foi atualizada"
          : "Avaliação enviada com sucesso",
      });

      setOpen(false);
      onRatingSubmit();
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Erro ao enviar avaliação",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full">
          <Star className="mr-2 h-4 w-4" />
          {existingRating ? "Editar Avaliação" : "Avaliar"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Avaliar {empreendedorNome}</DialogTitle>
          <DialogDescription>
            Compartilhe sua experiência com este empreendedor
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`h-8 w-8 ${
                    star <= (hoveredRating || rating)
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <label htmlFor="comment" className="text-sm font-medium">
              Comentário (opcional)
            </label>
            <Textarea
              id="comment"
              placeholder="Conte mais sobre sua experiência..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
            />
          </div>

          <Button onClick={handleSubmit} disabled={submitting} className="w-full">
            {submitting ? "Enviando..." : "Enviar Avaliação"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
